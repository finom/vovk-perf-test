import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyo")
export default class CyoController {
  @operation({
    summary: "Get Cyo",
  })
  @get()
  static getCyo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cyo",
  })
  @post("{id}")
  static createCyo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
