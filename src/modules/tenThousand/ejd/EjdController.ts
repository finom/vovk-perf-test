import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejd")
export default class EjdController {
  @operation({
    summary: "Get Ejd",
  })
  @get()
  static getEjd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ejd",
  })
  @post("{id}")
  static createEjd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
