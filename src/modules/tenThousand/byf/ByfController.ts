import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byf")
export default class ByfController {
  @operation({
    summary: "Get Byf",
  })
  @get()
  static getByf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Byf",
  })
  @post("{id}")
  static createByf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
