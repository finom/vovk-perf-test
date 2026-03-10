import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezg")
export default class EzgController {
  @operation({
    summary: "Get Ezg",
  })
  @get()
  static getEzg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ezg",
  })
  @post("{id}")
  static createEzg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
