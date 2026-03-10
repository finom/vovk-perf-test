import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkp")
export default class FkpController {
  @operation({
    summary: "Get Fkp",
  })
  @get()
  static getFkp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fkp",
  })
  @post("{id}")
  static createFkp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
