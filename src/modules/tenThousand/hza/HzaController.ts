import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hza")
export default class HzaController {
  @operation({
    summary: "Get Hza",
  })
  @get()
  static getHza = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hza",
  })
  @post("{id}")
  static createHza = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
