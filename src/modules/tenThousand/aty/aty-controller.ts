import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aty")
export default class AtyController {
  @operation({
    summary: "Get Aty",
  })
  @get()
  static getAty = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aty",
  })
  @post("{id}")
  static createAty = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
