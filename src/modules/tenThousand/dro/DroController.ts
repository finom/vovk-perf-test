import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dro")
export default class DroController {
  @operation({
    summary: "Get Dro",
  })
  @get()
  static getDro = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dro",
  })
  @post("{id}")
  static createDro = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
