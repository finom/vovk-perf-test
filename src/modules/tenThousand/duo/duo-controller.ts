import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("duo")
export default class DuoController {
  @operation({
    summary: "Get Duo",
  })
  @get()
  static getDuo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Duo",
  })
  @post("{id}")
  static createDuo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
