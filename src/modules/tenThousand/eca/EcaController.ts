import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eca")
export default class EcaController {
  @operation({
    summary: "Get Eca",
  })
  @get()
  static getEca = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eca",
  })
  @post("{id}")
  static createEca = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
