import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iht")
export default class IhtController {
  @operation({
    summary: "Get Iht",
  })
  @get()
  static getIht = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iht",
  })
  @post("{id}")
  static createIht = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
