import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eel")
export default class EelController {
  @operation({
    summary: "Get Eel",
  })
  @get()
  static getEel = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eel",
  })
  @post("{id}")
  static createEel = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
