import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aan")
export default class AanController {
  @operation({
    summary: "Get Aan",
  })
  @get()
  static getAan = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aan",
  })
  @post("{id}")
  static createAan = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
