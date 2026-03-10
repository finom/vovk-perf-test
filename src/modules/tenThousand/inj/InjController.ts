import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("inj")
export default class InjController {
  @operation({
    summary: "Get Inj",
  })
  @get()
  static getInj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Inj",
  })
  @post("{id}")
  static createInj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
