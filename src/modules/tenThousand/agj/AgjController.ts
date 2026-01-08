import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agj")
export default class AgjController {
  @operation({
    summary: "Get Agj",
  })
  @get()
  static getAgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agj",
  })
  @post("{id}")
  static createAgj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
