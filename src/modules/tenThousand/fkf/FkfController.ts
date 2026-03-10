import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkf")
export default class FkfController {
  @operation({
    summary: "Get Fkf",
  })
  @get()
  static getFkf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fkf",
  })
  @post("{id}")
  static createFkf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
