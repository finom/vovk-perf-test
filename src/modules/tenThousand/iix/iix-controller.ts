import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iix")
export default class IixController {
  @operation({
    summary: "Get Iix",
  })
  @get()
  static getIix = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iix",
  })
  @post("{id}")
  static createIix = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
