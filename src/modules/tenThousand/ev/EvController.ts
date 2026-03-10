import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ev")
export default class EvController {
  @operation({
    summary: "Get Ev",
  })
  @get()
  static getEv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ev",
  })
  @post("{id}")
  static createEv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
