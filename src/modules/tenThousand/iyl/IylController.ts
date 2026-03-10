import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyl")
export default class IylController {
  @operation({
    summary: "Get Iyl",
  })
  @get()
  static getIyl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iyl",
  })
  @post("{id}")
  static createIyl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
