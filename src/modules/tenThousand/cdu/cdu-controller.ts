import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdu")
export default class CduController {
  @operation({
    summary: "Get Cdu",
  })
  @get()
  static getCdu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cdu",
  })
  @post("{id}")
  static createCdu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
