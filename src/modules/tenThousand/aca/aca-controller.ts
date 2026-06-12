import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aca")
export default class AcaController {
  @operation({
    summary: "Get Aca",
  })
  @get()
  static getAca = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aca",
  })
  @post("{id}")
  static createAca = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
