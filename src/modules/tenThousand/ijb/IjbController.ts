import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijb")
export default class IjbController {
  @operation({
    summary: "Get Ijb",
  })
  @get()
  static getIjb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ijb",
  })
  @post("{id}")
  static createIjb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
