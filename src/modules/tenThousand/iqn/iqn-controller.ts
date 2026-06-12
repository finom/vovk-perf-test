import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqn")
export default class IqnController {
  @operation({
    summary: "Get Iqn",
  })
  @get()
  static getIqn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iqn",
  })
  @post("{id}")
  static createIqn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
