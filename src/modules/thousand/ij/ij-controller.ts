import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ij")
export default class IjController {
  @operation({
    summary: "Get Ij",
  })
  @get()
  static getIj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ij",
  })
  @post("{id}")
  static createIj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
