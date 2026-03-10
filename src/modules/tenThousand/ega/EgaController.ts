import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ega")
export default class EgaController {
  @operation({
    summary: "Get Ega",
  })
  @get()
  static getEga = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ega",
  })
  @post("{id}")
  static createEga = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
