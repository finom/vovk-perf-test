import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ho")
export default class HoController {
  @operation({
    summary: "Get Ho",
  })
  @get()
  static getHo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ho",
  })
  @post("{id}")
  static createHo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
