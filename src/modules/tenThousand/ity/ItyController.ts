import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ity")
export default class ItyController {
  @operation({
    summary: "Get Ity",
  })
  @get()
  static getIty = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ity",
  })
  @post("{id}")
  static createIty = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
