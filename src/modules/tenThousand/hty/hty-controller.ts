import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hty")
export default class HtyController {
  @operation({
    summary: "Get Hty",
  })
  @get()
  static getHty = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hty",
  })
  @post("{id}")
  static createHty = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
