import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmu")
export default class JmuController {
  @operation({
    summary: "Get Jmu",
  })
  @get()
  static getJmu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jmu",
  })
  @post("{id}")
  static createJmu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
