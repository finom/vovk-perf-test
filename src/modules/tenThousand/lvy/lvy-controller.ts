import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvy")
export default class LvyController {
  @operation({
    summary: "Get Lvy",
  })
  @get()
  static getLvy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lvy",
  })
  @post("{id}")
  static createLvy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
