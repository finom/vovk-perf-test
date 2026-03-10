import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("huu")
export default class HuuController {
  @operation({
    summary: "Get Huu",
  })
  @get()
  static getHuu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Huu",
  })
  @post("{id}")
  static createHuu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
