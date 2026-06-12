import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("anj")
export default class AnjController {
  @operation({
    summary: "Get Anj",
  })
  @get()
  static getAnj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Anj",
  })
  @post("{id}")
  static createAnj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
