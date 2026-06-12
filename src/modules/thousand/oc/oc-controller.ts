import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("oc")
export default class OcController {
  @operation({
    summary: "Get Oc",
  })
  @get()
  static getOc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Oc",
  })
  @post("{id}")
  static createOc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
