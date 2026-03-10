import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clg")
export default class ClgController {
  @operation({
    summary: "Get Clg",
  })
  @get()
  static getClg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Clg",
  })
  @post("{id}")
  static createClg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
