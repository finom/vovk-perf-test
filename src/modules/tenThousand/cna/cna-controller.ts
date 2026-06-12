import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cna")
export default class CnaController {
  @operation({
    summary: "Get Cna",
  })
  @get()
  static getCna = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cna",
  })
  @post("{id}")
  static createCna = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
