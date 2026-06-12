import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eve")
export default class EveController {
  @operation({
    summary: "Get Eve",
  })
  @get()
  static getEve = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eve",
  })
  @post("{id}")
  static createEve = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
