import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijj")
export default class IjjController {
  @operation({
    summary: "Get Ijj",
  })
  @get()
  static getIjj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ijj",
  })
  @post("{id}")
  static createIjj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
