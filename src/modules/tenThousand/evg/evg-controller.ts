import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evg")
export default class EvgController {
  @operation({
    summary: "Get Evg",
  })
  @get()
  static getEvg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Evg",
  })
  @post("{id}")
  static createEvg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
