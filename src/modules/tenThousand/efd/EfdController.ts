import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efd")
export default class EfdController {
  @operation({
    summary: "Get Efd",
  })
  @get()
  static getEfd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Efd",
  })
  @post("{id}")
  static createEfd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
