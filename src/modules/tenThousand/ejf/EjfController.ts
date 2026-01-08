import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejf")
export default class EjfController {
  @operation({
    summary: "Get Ejf",
  })
  @get()
  static getEjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejf",
  })
  @post("{id}")
  static createEjf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
