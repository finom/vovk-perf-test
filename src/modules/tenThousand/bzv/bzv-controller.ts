import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzv")
export default class BzvController {
  @operation({
    summary: "Get Bzv",
  })
  @get()
  static getBzv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bzv",
  })
  @post("{id}")
  static createBzv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
