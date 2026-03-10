import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsr")
export default class HsrController {
  @operation({
    summary: "Get Hsr",
  })
  @get()
  static getHsr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hsr",
  })
  @post("{id}")
  static createHsr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
