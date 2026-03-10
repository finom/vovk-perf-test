import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aig")
export default class AigController {
  @operation({
    summary: "Get Aig",
  })
  @get()
  static getAig = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aig",
  })
  @post("{id}")
  static createAig = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
