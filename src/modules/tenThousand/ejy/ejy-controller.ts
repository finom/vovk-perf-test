import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejy")
export default class EjyController {
  @operation({
    summary: "Get Ejy",
  })
  @get()
  static getEjy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ejy",
  })
  @post("{id}")
  static createEjy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
