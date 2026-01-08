import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifc")
export default class IfcController {
  @operation({
    summary: "Get Ifc",
  })
  @get()
  static getIfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifc",
  })
  @post("{id}")
  static createIfc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
