import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqf")
export default class LqfController {
  @operation({
    summary: "Get Lqf",
  })
  @get()
  static getLqf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lqf",
  })
  @post("{id}")
  static createLqf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
