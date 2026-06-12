import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("med")
export default class MedController {
  @operation({
    summary: "Get Med",
  })
  @get()
  static getMed = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Med",
  })
  @post("{id}")
  static createMed = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
