import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iad")
export default class IadController {
  @operation({
    summary: "Get Iad",
  })
  @get()
  static getIad = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iad",
  })
  @post("{id}")
  static createIad = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
