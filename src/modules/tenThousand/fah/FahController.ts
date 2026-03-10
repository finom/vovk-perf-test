import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fah")
export default class FahController {
  @operation({
    summary: "Get Fah",
  })
  @get()
  static getFah = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fah",
  })
  @post("{id}")
  static createFah = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
