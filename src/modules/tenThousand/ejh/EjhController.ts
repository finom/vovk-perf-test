import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejh")
export default class EjhController {
  @operation({
    summary: "Get Ejh",
  })
  @get()
  static getEjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejh",
  })
  @post("{id}")
  static createEjh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
