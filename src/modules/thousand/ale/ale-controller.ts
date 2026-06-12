import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ale")
export default class AleController {
  @operation({
    summary: "Get Ale",
  })
  @get()
  static getAle = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ale",
  })
  @post("{id}")
  static createAle = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
