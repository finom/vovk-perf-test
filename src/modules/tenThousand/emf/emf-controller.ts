import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emf")
export default class EmfController {
  @operation({
    summary: "Get Emf",
  })
  @get()
  static getEmf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Emf",
  })
  @post("{id}")
  static createEmf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
