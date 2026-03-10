import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dza")
export default class DzaController {
  @operation({
    summary: "Get Dza",
  })
  @get()
  static getDza = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dza",
  })
  @post("{id}")
  static createDza = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
