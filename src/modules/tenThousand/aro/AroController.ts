import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aro")
export default class AroController {
  @operation({
    summary: "Get Aro",
  })
  @get()
  static getAro = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aro",
  })
  @post("{id}")
  static createAro = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
