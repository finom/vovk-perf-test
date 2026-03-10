import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aer")
export default class AerController {
  @operation({
    summary: "Get Aer",
  })
  @get()
  static getAer = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aer",
  })
  @post("{id}")
  static createAer = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
